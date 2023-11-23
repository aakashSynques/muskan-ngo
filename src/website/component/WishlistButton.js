import React from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { fetch } from '../../utils';
import { useNavigate } from 'react-router-dom';

const WishlistButton = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const tokenDataFromLocalStorage = localStorage.getItem('muskan_token_data');
    const parsedTokenData = tokenDataFromLocalStorage ? JSON.parse(tokenDataFromLocalStorage) : null;

  const handleAddWhishList = async (productId) => {
        try {
            // Check if the user is logged in
            if (!parsedTokenData) {
                // User is not logged in, handle accordingly (e.g., show a login prompt)
                // console.log('User is not logged in. Show login prompt or handle accordingly.');
                navigate('/account/login');
                return;
            }


            const token = localStorage.getItem("muskan_token");
            const headers = {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            };
            const body = {
                product_id: productId,
            };
            const response = await fetch(
                "/wishlist/add",
                "POST",
                body,
                headers,
            );
            if (response.data && response.data.success) {
                // alert(response.data.message);
                toast.success(response.data.message, { position: toast.POSITION.TOP_RIGHT });

            } else {
                console.log('Response not successful:', response);
            }
            // setLoading(false);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <button className='btn pull-right' onClick={handleAddWhishList}>
                <i className="fa fa-heart-o" aria-hidden="true"></i>
            </button>
        </>
    )
}

export default WishlistButton