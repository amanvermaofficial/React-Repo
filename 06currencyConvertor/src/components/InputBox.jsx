import React, { useId } from 'react'

//useId:-
//useId generates a unique ID string that can be used for various purposes like element IDs.
//It's useful in form elements to link labels with inputs correctly.
//Helps avoid hardcoding IDs and manually ensuring their uniqueness, especially in complex components.

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    amountDisable = false,
    currencyOptions = [],
    selectCurrency = "usd",
    currencyDisable = false,
    className = "",

}) {

    const amountInputId = useId();


    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >

                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>//Remenber the key in React
                    ))}



                </select>
            </div>
        </div>
    );
}

export default InputBox;
