import React from 'react';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
  } from "@material-tailwind/react";
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../../features/slices/cartSlice';

const Cart = ({open , handleOpen}) => {
    const cart = useSelector((state) => state.cart.cart);
    const dispatch = useDispatch();
  return (
    <div>
        {cart.length > 0 ? <Dialog open={open} handler={handleOpen}>
        <DialogHeader>shopping bag</DialogHeader>
        <DialogBody divider className='flex flex-col justify-center items-start'>
          {cart.map((item , index) => {
            return(
                <div key={index}>
                    <div className='grid grid-cols-2 py-4'>
                        <div>
                            <img className='h-[125px rounded-md]' src={item.img} alt={item.name} />
                        </div>
                        <div className='max-w-xs'>
                            <p>
                                selected size : <span>{item.size}</span>
                            </p>
                            <span className='ml-2 rounded-full' style={{backgroundColor : item.color}}></span>
                        </div>
                        <Button onClick={() => dispatch(removeFromCart(item))} color='red' size='sm'>remove</Button>
                    </div>
                </div>
            )
          })}
        </DialogBody>
        <DialogFooter>
        </DialogFooter>
      </Dialog> : <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody>
          your bag is empty
        </DialogBody>
        <DialogFooter>
        </DialogFooter>
      </Dialog>}
    </div>
  )
}

export default Cart;
