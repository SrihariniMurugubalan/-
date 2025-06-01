import { useState } from "react";
import axios from "axios";

const ReviewForm = () => {
    const [rating, setRating] = useState(0);
    const [accepted, setAccepted] = useState(false);
    const [user, setUser] = useState('');
    const [comment, setComment] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = () => {
        if (!accepted) return;
        if (!user || !comment) {
            setError("Please enter your name and comment.");
            return;
        }
        setError(null);
    
        axios.post('https://python-2-2unq.onrender.com/feedbacks', { user, comment, rating })
            .then(res => {
                alert('Feedback submitted!');
                setUser('');
                setComment('');
                setRating(0);
                setAccepted(false);
            })
            .catch(err => {
                setError(err.response?.data?.error || 'Submission failed');
            });
    };
    

    return (
        <div className="bg-white shadow p-6 rounded w-full">
            <h2 className="text-xl font-semibold mb-4">Leave a review</h2>
            <p className="mb-2">Click the stars to rate us *</p>
            <div className="flex space-x-2 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                    <span
                        key={i}
                        onClick={() => setRating(i)}
                        className={`cursor-pointer text-2xl ${i <= rating ? "text-yellow-500" : "text-gray-400"}`}
                    >★</span>
                ))}
            </div>
            <div className="mb-4">
            <label htmlFor="nameInput" className="block mb-1 font-semibold">
                Name
            </label>
            <input
                id="nameInput"
                type="text"
                placeholder="Your name"
                value={user}
                onChange={e =>{
                    console.log("value----->", e.target.value)
                     setUser(e.target.value)}}
                className="border border-gray-300 rounded px-2 py-1 w-full"
            />
            </div>
            <div className="mb-4">
            <label htmlFor="nameInput" className="block mb-1 font-semibold">
                Comment
            </label>
            <textarea
                className="border p-2 w-full h-24 mb-2"
                placeholder="Enter your review here ..."
                value={comment}
                onChange={e => setComment(e.target.value)}
            />
            </div>
            <div className="mb-4">
                <label className="flex items-center space-x-2 text-sm">
                    <input
                        type="checkbox"
                        checked={accepted}
                        onChange={(e) => {
                            setAccepted(e.target.checked);
                            console.log("Checkbox value:", e.target.checked);
                        }
                        }
                    />
                    <span>
                        I accept the Terms in{" "}
                        <a href="#" className="text-blue-500 underline">
                            Privacy Policy
                        </a>
                    </span>
                </label>
            </div>
            <button
                className={`py-2 px-4 rounded text-white ${accepted ? 'bg-blue-600' : 'bg-gray-400 cursor-not-allowed'}`}
                disabled={!accepted} onClick={handleSubmit}
            >
                Submit
            </button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};
export default ReviewForm;
