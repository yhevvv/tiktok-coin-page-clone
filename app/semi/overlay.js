import { useState, useEffect } from 'react';
import Image from 'next/image';
import tick from './../tick.png';
import loading from './../loading.gif';
import { Oval } from 'react-loader-spinner';

const Overlay = ({ onClose, money }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [isIntermediateScreenVisible, setIsIntermediateScreenVisible] = useState(false);

    useEffect(() => {
        // const timer1 = setTimeout(() => {
        //   setIsIntermediateScreenVisible(false);
        // }, 0);

        // const timer2 = setTimeout(() => {
        //   setIsIntermediateScreenVisible(false);
        // }, 3000);

        // const timer3 = setTimeout(() => {
        //   setIsLoading(false);
        //   setIsIntermediateScreenVisible(true);
        // }, 3000);

        const timer1 = setTimeout(() => {
            setIsLoading(false);
            setIsIntermediateScreenVisible(true);
        }, 3000);


        const timer2 = setTimeout(() => {
            setIsIntermediateScreenVisible(false);
        }, 6000);



        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    if (isIntermediateScreenVisible) {
        return (
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 z-[200000]">
                <div className="bg-white flex flex-col items-center justify-center p-8 mt-16 w-[50vw] h-[50vh] rounded-lg">
                    <Image src={loading} width={150} height={150}/>
                </div>
            </div>
        );
    }
    else if (isLoading) {


        return (
            <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 z-[200000]">
                <div className="bg-white flex flex-col items-center justify-center p-8 mt-16 w-[50vw] h-[50vh] rounded-lg">
                    <Oval
                        height={50}
                        width={50}
                        color="black"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel="oval-loading"
                        secondaryColor="white"
                        strokeWidth={3}
                        strokeWidthSecondary={3}
                    />
                    <br />
                    <b>Payment is processing</b>
                    <br />
                    <p>Payment could take a few minutes to complete</p>
                </div>
            </div>
        );
    }

    return (
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 z-[200000]">
            <div className="bg-white p-8 mt-16 w-[50vw] rounded-lg">
                <Image src={tick} alt="Green Tick" className="w-16 h-16 mx-auto mb-4" />
                <h1 className="text-2xl text-center font-bold m-8">Payment Completed</h1>
                <img
                    src="https://img.freepik.com/free-icon/paypal_318-674246.jpg?w=2000"
                    alt="PayPal Logo"
                    className="w-16 h-16 mx-auto mb-4"
                />
                <p className="text-center m-8">payment method</p>
                <p className="text-center mb-4">
                    You recharged {money} coins to the given username. You <br /> can now send virtual gifts with your coins.
                </p>
                <p className="text-center mb-16">Coins will be added shortly.</p>
                <div className="flex justify-center">
                    <button
                        onClick={onClose}
                        className="mt-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-4 py-2"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Overlay;
