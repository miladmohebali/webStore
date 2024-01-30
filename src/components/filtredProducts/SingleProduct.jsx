import React, { useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Tooltip, Button } from "@material-tailwind/react";
import { addToCart } from "../../features/slices/cartSlice";

const SingleProduct = () => {
  const product = useSelector((state) => state.products.singleProduct);
  const { id } = useParams();
  const productSize = product[0].size ? product[0].size : "";
  const productColor = product[0].color[0];
  const [size, setSize] = useState(productSize);
  const [color , setColor] = useState(productColor);
  const dispatch = useDispatch();
  return (
    <div>
      {product
        .filter((product) => product.id === id)
        .map((item, index) => {
          return (
            <div key={index} className="flex justify-center items-center py-10">
              <div className="pl-44 grow-[2]">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-[850px] rounded-lg"
                />
              </div>
              <div className="text-2xl font-inter font-bold tracking-normal leading-none">
                <div className="grow-[3]">
                  <div className="max-w-lg">
                    <h5>{item.name}</h5>
                    <p className="text-orange-700 text-xl font-inter font-bold tracking-normal leading-none pb-4">
                      5% OFF
                    </p>
                    <p className="text-gray-600 text-xl font-inter font-bold tracking-normal leading-none pb-4">
                      {item.text}
                    </p>
                    <div className="pb-4">
                      <div>
                        <label
                          htmlFor="sizes"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Pick a size
                        </label>
                        <select
                          onChange={(e) => setSize(e.target.value)}
                          id="sizes"
                          value={size}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          {item?.size.map((size, index) => {
                            return (
                              <option value={size} key={index}>
                                {size}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div className="pb-4">
                        <label
                          htmlFor="colors"
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                        >
                          Pick a color
                        </label>
                        <select
                          onChange={(e) => setColor(e.target.value)}
                          id="colors"
                          value={color}
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        >
                          {item?.color.map((color, index) => {
                            return (
                              <option value={color} key={index}>
                                {color}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <Tooltip content='Add to Cart' placement='bottom'>
                        <Button color="gray" size="lg" variant="outlined" ripple={true} onClick={() => dispatch(addToCart({
                          id : item.id,
                          name : item.name,
                          img : item.img,
                          size : size,
                          color : color,
                          amount : 1,
                          price : item.price
                        }))}>Add to Cart</Button>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SingleProduct;
