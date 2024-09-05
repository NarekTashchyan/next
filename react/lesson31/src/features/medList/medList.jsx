import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { changeRating } from './medList.slice';
import '@fortawesome/fontawesome-free/css/all.min.css';

export const MedList = () => {
    const meds = useSelector((state) => state.meds);
    const dispatch = useDispatch();
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const filteredMeds = meds.filter((med) =>
        med.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleStarClick = (medId, rating) => {
        dispatch(changeRating({ medId, rating }));
    };

    return (
        <>
            <input
                type="text"
                placeholder="Search medicines..."
                value={searchQuery}
                onChange={handleSearchChange}
                style={{
                    padding: '10px',
                    marginBottom: '20px',
                    width: '100%',
                    fontSize: '16px',
                }}
            />

            {filteredMeds.length > 0 ? (
                filteredMeds.map((med) => (
                    <div key={med.id}>
                        <h1>{med.name}</h1>
                        <h1>Rating: {med.rating}</h1>
                        <div className="star-container">
                            {[...Array(5)].map((_, index) => {
                                const starRating = index + 1;
                                return (
                                    <i
                                    key={index}
                                    className={`fas fa-star star ${starRating <= med.rating ? 'yellow' : 'gray'}`}
                                    onClick={() => handleStarClick(med.id, starRating)}
                                ></i>
                                );
                            })}
                        </div>
                    </div>
                ))
            ) : (
                <p>No medicines found</p>
            )}
        </>
    );
};