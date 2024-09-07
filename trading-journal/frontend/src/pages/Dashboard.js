import React, { useState, useEffect, useContext } from 'react';
import { Line } from 'react-chartjs-2';
import { AuthContext } from '../context/AuthContext';
import dayjs from 'dayjs';

const Dashboard = () => {
    const { auth } = useContext(AuthContext);
    const [initialBalance, setInitialBalance] = useState('');
    const [equityData, setEquityData] = useState([]);
    const [equityCurve, setEquityCurve] = useState([]);
    const [isBalanceSet, setIsBalanceSet] = useState(false);
    const [dateLabels, setDateLabels] = useState([]);

    useEffect(() => {
        const savedBalanceSet = localStorage.getItem('balanceSet') === 'true';
        const savedInitialBalance = localStorage.getItem('initialBalance');
        const savedEquityCurve = JSON.parse(localStorage.getItem('equityCurve'));
        const savedDateLabels = JSON.parse(localStorage.getItem('dateLabels'));

        if (savedBalanceSet && savedInitialBalance && savedEquityCurve && savedDateLabels) {
            setInitialBalance(savedInitialBalance);
            setEquityCurve(savedEquityCurve);
            setDateLabels(savedDateLabels);
            setIsBalanceSet(true);
        }

        if (auth.token) {
            fetchTrades();
        }
    }, [auth.token]);

    const fetchTrades = async () => {
        try {
            const response = await fetch('https://trade-scribe.vercel.app/api/trades', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${auth.token}`,
                },
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            setEquityData(data);

            if (isBalanceSet && initialBalance) {
                const curveAndLabels = calculateEquityCurveAndLabels(data, parseFloat(initialBalance));
                setEquityCurve(curveAndLabels.curve);
                setDateLabels(curveAndLabels.labels);
                localStorage.setItem('equityCurve', JSON.stringify(curveAndLabels.curve));
                localStorage.setItem('dateLabels', JSON.stringify(curveAndLabels.labels));
            }
        } catch (error) {
            console.error('Error fetching trades:', error);
        }
    };

    const calculateEquityCurveAndLabels = (trades, balance) => {
        if (!Array.isArray(trades) || trades.length === 0) {
            console.error('No trades data available.');
            return { curve: [], labels: [] };
        }
    
        // Safeguard against undefined trades[0]
        const startDate = trades[0] && trades[0].date ? dayjs(trades[0].date) : dayjs();
    
        let equity = [balance];
        let labels = [];
        let currentDate = startDate;
    
        trades.forEach(trade => {
            if (!trade || !trade.date) {
                console.error('Invalid trade object:', trade);
                return;
            }
    
            const tradeDate = dayjs(trade.date);
    
            while (currentDate.isBefore(tradeDate)) {
                labels.push(currentDate.format('YYYY-MM-DD'));
                equity.push(equity[equity.length - 1]);
                currentDate = currentDate.add(1, 'day');
            }
    
            const newBalance = equity[equity.length - 1] + trade.pnl;
            equity.push(newBalance);
            labels.push(tradeDate.format('YYYY-MM-DD'));
            currentDate = tradeDate.add(1, 'day');
        });
    
        const today = dayjs();
        while (currentDate.isBefore(today) || currentDate.isSame(today, 'day')) {
            labels.push(currentDate.format('YYYY-MM-DD'));
            equity.push(equity[equity.length - 1]);
            currentDate = currentDate.add(1, 'day');
        }
    
        return { curve: equity, labels };
    };
    
    const handleInitialBalanceChange = (e) => {
        setInitialBalance(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (initialBalance) {
            const curveAndLabels = calculateEquityCurveAndLabels(equityData, parseFloat(initialBalance));
            setEquityCurve(curveAndLabels.curve);
            setDateLabels(curveAndLabels.labels);
            setIsBalanceSet(true);
            localStorage.setItem('balanceSet', 'true');
            localStorage.setItem('initialBalance', initialBalance);
            localStorage.setItem('equityCurve', JSON.stringify(curveAndLabels.curve));
            localStorage.setItem('dateLabels', JSON.stringify(curveAndLabels.labels));
        }
    };

    const handleReset = () => {
        setInitialBalance('');
        setEquityCurve([]);
        setDateLabels([]);
        setIsBalanceSet(false);
        localStorage.removeItem('balanceSet');
        localStorage.removeItem('initialBalance');
        localStorage.removeItem('equityCurve');
        localStorage.removeItem('dateLabels');
    };

    return (
        <div className="dashboard flex flex-col h-full w-screen px-10 py-[10vh]">
            <h1 className="text-3xl font-bold mb-4 text-center text-green-900">Dashboard</h1>

            {!isBalanceSet ? (
                <div className="mb-6 text-center">
                    <form onSubmit={handleSubmit}>
                        <label className="block text-lg font-medium mb-2">Initial Balance:</label>
                        <input
                            type="number"
                            value={initialBalance}
                            onChange={handleInitialBalanceChange}
                            className="w-max px-3 py-2 border border-gray-300 rounded-lg"
                            placeholder="Enter your initial balance"
                        />
                        <button
                            type="submit"
                            className="mt-2 bg-primary text-white py-2 px-4 rounded-lg"
                        >
                            Set Initial Balance
                        </button>
                    </form>
                </div>
            ) : (
                <div className="flex justify-end mb-6 py-0 z-6">
                    <button
                        onClick={handleReset}
                        className="bg-red-500 text-white py-2 px-4 rounded-lg"
                    >
                        Reset
                    </button>
                </div>
            )}

            {equityCurve.length > 0 && (
                <div className="flex equity-curve-chart flex-grow relative h-[60vh] p-9 rounded-lg shadow-lg">
                    <Line
                        data={{
                            labels: dateLabels,
                            datasets: [
                                {
                                    label: 'Equity Curve',
                                    data: equityCurve,
                                    fill: 'start',
                                    backgroundColor: 'rgba(75,192,192,0.2)',
                                    borderColor: 'rgba(75,192,192,0.7)',
                                },
                            ],
                        }}
                        options={{
                            maintainAspectRatio: false,
                            scales: {
                                x: {
                                    grid: {
                                        display: false,
                                    },
                                },
                                y: {
                                    grid: {
                                        display: false,
                                    },
                                },
                            },
                        }}
                    />
                </div>
            )}
        </div>
    );
};

export default Dashboard;
