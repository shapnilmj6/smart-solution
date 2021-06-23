import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import swal from 'sweetalert';
import toast from 'react-hot-toast';

const Review = () => {
    const [review, setReview] = useState({});
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const handleBlur = e => {
        const reReview = { ...review, img: loggedInUser.img };
        reReview[e.target.name] = e.target.value;
        setReview(reReview);
    }

    const submitOpinion = (e) => {
        e.preventDefault();
        const loading = toast.loading('Please wait...!');
        fetch('http://localhost:5000/addReviews', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/Json'
            },
            body: JSON.stringify(review)
        })
            .then(response => response.json())
            .then(data => {
                toast.dismiss(loading);
                if (data) {
                    return swal("Review Added", "Review has been added successful.", "success");
                }
                swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
            })
            .catch(error => {
                toast.dismiss(loading);
                swal("Failed!", "Something went wrong! Please try again.", "error", { dangerMode: true });
            })
    }

    return (
        <section id="review" style={{ backgroundColor: '#f5f7ff' }} className="py-5">
            <div className="container">
                <div className="section-header text-center text-white mb-5">
                    <h5 className="text-primary">Review Us</h5>
                    <h1 className="text-dark">Always connect with us</h1>
                </div>
                <div className="col-md-9 mx-auto">
                    <form onSubmit={submitOpinion}>
                        <div className="form-group">
                            <input onBlur={handleBlur} name="name" type="text" className="form-control" placeholder="Your Name" required />
                        </div>
                        <div className="form-group">
                            <input onBlur={handleBlur} name="profession" type="text" className="form-control" placeholder="Your Profession" required />
                        </div>
                        <div className="form-group">
                            <textarea onBlur={handleBlur} name="description" className="form-control" id="" cols="30" rows="10" placeholder="Your opinion about us" required></textarea>
                        </div>
                        <div className="form-group text-center">
                            <button type="submit" className="btn btn-primary">Submit review</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Review;