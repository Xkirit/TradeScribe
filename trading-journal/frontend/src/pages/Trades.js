import React, { useState, useEffect, useContext } from 'react';
import { TiDeleteOutline } from 'react-icons/ti';
import { AuthContext } from '../context/AuthContext';

const Trades = () => {
  const { auth } = useContext(AuthContext);
  const [trades, setTrades] = useState([]);
  const [trade, setTrade] = useState({
    asset: '',
    entry: '',
    exit: '',
    quantity: '',
    pnl: '',
    date: '',
    notes: ''
  });

  useEffect(() => {
    const fetchTrades = async () => {
      try {
        const token = auth.token;

        if (!token) {
          throw new Error('No token found');
        }

        const response = await fetch('http://localhost:5000/api/trades', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch trades');
        }

        const data = await response.json();
        setTrades(data);
      } catch (error) {
        console.error('Error fetching trades:', error.message);
      }
    };

    fetchTrades();
  }, [auth.token]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrade({
      ...trade,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { entry, exit, quantity } = trade;
    const pnl = calculatePnL(entry, exit, quantity);

    try {
      const response = await fetch('http://localhost:5000/api/trades', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${auth.token}`
        },
        body: JSON.stringify({ ...trade, pnl }),
      });

      if (!response.ok) {
        throw new Error('Failed to add trade');
      }

      const data = await response.json();
      setTrades([...trades, data]);
      setTrade({
        asset: '',
        entry: '',
        exit: '',
        quantity: '',
        pnl: '',
        date: '',
        notes: ''
      });
    } catch (err) {
      console.error('Error adding trade:', err);
    }
  };


  const calculatePnL = (entry, exit, quantity) => {
    if (!quantity || !entry || !exit) return '';
    return (exit - entry) * quantity;
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/trades/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${auth.token}` // Add token to headers
        }
      });

      setTrades(trades.filter(trade => trade._id !== id));
    } catch (err) {
      console.error('Error deleting trade:', err);
    }
  };

  return (
    <div className="py-12 mt-5">
      <h1 className="text-3xl font-bold mb-4 text-green-900">Trade Tracker</h1>

      <form onSubmit={handleSubmit} className="bg-white bg-opacity-20 backdrop-blur-md p-4 rounded-lg shadow-lg w-full">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Asset</label>
            <input
              type="text"
              name="asset"
              value={trade.asset}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-transparent rounded-lg bg-white"
              placeholder="Enter asset"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Entry Price</label>
            <input
              type="number"
              name="entry"
              value={trade.entry}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-transparent rounded-lg bg-white"
              placeholder="Enter entry price"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Exit Price</label>
            <input
              type="number"
              name="exit"
              value={trade.exit}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-transparent rounded-lg bg-white"
              placeholder="Enter exit price"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Quantity</label>
            <input
              type="number"
              name="quantity"
              value={trade.quantity}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-transparent rounded-lg bg-white"
              placeholder="Enter quantity"
            />
          </div>

          <div className="mb-4 col-span-2">
            <label className="block text-sm font-medium mb-1">Date</label>
            <input
              type="date"
              name="date"
              value={trade.date}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-transparent rounded-lg bg-white"
            />
          </div>

          <div className="mb-4 col-span-2">
            <label className="block text-sm font-medium mb-1">Notes</label>
            <textarea
              name="notes"
              value={trade.notes}
              onChange={handleChange}
              className="w-full px-3 py-1 border border-transparent rounded-lg bg-white"
              placeholder="Enter any notes"
              rows="2"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-light focus:outline-none focus:ring-2 focus:ring-primary-dark col-span-2"
          >
            Add Trade
          </button>
        </div>
      </form>

      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Trades List</h2>
        <table className="w-full bg-white bg-opacity-20 backdrop-blur-md rounded-lg shadow-md text-center">
          <thead>
            <tr>
              <th className="p-2">Asset</th>
              <th className="p-2">Entry Price</th>
              <th className="p-2">Exit Price</th>
              <th className="p-2">Quantity</th>
              <th className="p-2">PnL</th>
              <th className="p-2">Date</th>
              <th className="p-2">Notes</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {trades.map((t) => (
              <tr key={t._id}>
                <td className="p-2">{t.asset}</td>
                <td className="p-2">{t.entry}</td>
                <td className="p-2">{t.exit}</td>
                <td className="p-2">{t.quantity}</td>
                <td className="p-2">{t.pnl}</td>
                <td className="p-2">{new Date(t.date).toLocaleDateString()}</td>
                <td className="p-2">{t.notes}</td>
                <td className="p-2">
                  <button
                    onClick={() => handleDelete(t._id)}
                    className="text-red-500 hover:text-red-700 focus:outline-none"
                  >
                    <TiDeleteOutline />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Trades;
