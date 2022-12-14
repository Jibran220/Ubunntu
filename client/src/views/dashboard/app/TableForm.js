import React, { useState, useEffect } from "react"
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai"
import { v4 as uuidv4 } from "uuid"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';


export default function TableForm({
  description,
  setDescription,
  quantity,
  setQuantity,
  price,
  setPrice,
  amount,
  setAmount,
  list,
  setList,
  total,
  setTotal,
  heading,
  setHeading,
}) {
  const [isEditing, setIsEditing] = useState(false)

  // Submit form function
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!description || !quantity || !price) {
      toast.error("Please fill in all inputs")
    } else {
      const newItems = {
        id: uuidv4(),
        heading,
        description,
        quantity,
        price,
        amount,
      }
      setDescription("")
      setHeading("")
      setQuantity("")
      setPrice("")
      setAmount("")
      setList([...list, newItems])
      setIsEditing(false)
    }
  }

  // Calculate items amount function
  useEffect(() => {
    const calculateAmount = (amount) => {
      setAmount(quantity * price)
    }

    calculateAmount(amount)
  }, [amount, price, quantity, setAmount])

  // Calculate total amount of items in table
  useEffect(() => {
    let rows = document.querySelectorAll(".amount")
    let sum = 0

    for (let i = 0; i < rows.length; i++) {
      if (rows[i].className === "amount") {
        sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
        setTotal(sum)
      }
    }
  })

  // Edit function
  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id)
    setList(list.filter((row) => row.id !== id))
    setIsEditing(true)
    setDescription(editingRow.description)
    setHeading(editingRow.heading)
    setQuantity(editingRow.quantity)
    setPrice(editingRow.price)
  }

  // Delete function
  const deleteRow = (id) => setList(list.filter((row) => row.id !== id))

  return (
    <>
      <CSS>
        <ToastContainer position="top-right" theme="colored" />
        <hr />
        <form onSubmit={handleSubmit}>

          
         
     
           

         
          <div className="row">
          <div className="col-md-3">
            <label htmlFor="heading">Item Heading</label>
            <input
              type="text"
              name="heading"
              id="heading"
              placeholder="Item Heading"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
            />
            </div>
           <div className="col-md-3"> 
          <label htmlFor="description">  description</label>
            <input
              type="text"
              name="description"
              id="description"
              placeholder="Item description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="col-md-3">
      
              <label htmlFor="quantity">Quantity</label>
              <input
                type="text"
                name="quantity"
                id="quantity"
                placeholder="Quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
              </div>
          </div>  
          <div className="col-md-3">

              <label htmlFor="price">Price</label>
              <input
                type="text"
                name="price"
                id="price"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
       
         
          


            <div className="flex flex-col">
              <label htmlFor="amount">Amount</label>
              <p>{amount}</p>
            </div>
          
          <button
            type="submit"
            className="mb-5 bg-blue-500 text-white font-bold py-2 px-8 rounded shadow border-2 border-blue-500 hover:bg-transparent hover:text-blue-500 transition-all duration-300"
          >
            {isEditing ? "Editing Row Item" : "Add Table Item"}
          </button>
        </form>

        {/* Table items */}

        <table width="100%" className="mb-10">
          <thead>
            <tr className="   p-1">
              <td className="font-bold"><h5>Description</h5></td>
              <td className="font-bold"><h5>Quantity</h5></td>
              <td className="font-bold"><h5>Price</h5></td>
              <td className="font-bold"><h5>Amount</h5></td>
            </tr>
          </thead>
          {list.map(({ id, description, quantity, price, amount, heading }) => (
            <React.Fragment key={id}>
              <tbody>
                <tr className="h-10">
                  <td><u><b> {heading} :</b></u> <p><i>{description}</i></p></td>
                  <td>{quantity}</td>
                  <td>{price}</td>
                  <td className="amount">{amount}</td>
                  <td>
                    <button onClick={() => editRow(id)}>
                      <AiOutlineEdit className="text-green-500 font-bold text-xl" />
                    </button>
                  </td>
                  <td>
                    <button onClick={() => deleteRow(id)}>
                      <AiOutlineDelete className="text-red-500 font-bold text-xl" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </React.Fragment>
          ))}
        </table>

        <div>
          <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">
            $ {total.toLocaleString()}
          </h2>
        </div>
      </CSS>
    </>
  )
}
const CSS = styled.div`
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url("https://fonts.googleapis.com/css2?family=Reem+Kufi:wght@400;700&display=swap");

:root {
  --blue-card: #12036f;
  --red-card: #f12711;
  --yellow-card: #f5af19;
}

::selection,
::-moz-selection {
  @apply bg-teal-500 text-white;
}

::-webkit-scrollbar {
  @apply w-3;
}

::-webkit-scrollbar-track {
  @apply shadow rounded-lg bg-teal-100;
}

::-webkit-scrollbar-thumb {
  @apply bg-teal-400 rounded-lg hover:bg-teal-500 transition-all duration-200;
}

.beta__tag {
  position: absolute;
  left: -6rem;
  top: 2rem;
  background-color: #f12711;
  width: 300px;
  transform: rotate(-45deg);
  padding: 0.5rem;
  text-align: center;
}

body {
  margin: 0;
  font-family: "Reem Kufi", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 18px;
  @apply bg-teal-50 overflow-x-hidden;
}

.max-width {
  @apply px-5 xl:max-w-7xl xl:mx-auto 2xl:px-0;
}

.slant {
  border-right: 100vw solid #99f6e4;
  border-top: 150px solid transparent;
}

.slant-left {
  border-right: 100vw solid;
  @apply border-r-teal-200;
  border-bottom: 150px solid transparent;
}

.slant-footer {
  border-left: 100vw solid;
  @apply border-l-teal-900;
  border-top: 150px solid transparent;
  @apply absolute;
  top: -150px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: #112827;
}

label {
  margin-bottom: 0.3rem;
  font-size: 1.05rem;
  font-weight: 600;
  color: #383838;
}

input,
textarea {
  background-color: #fff;
  padding: 0.5rem;
  border-radius: 0.2rem;
  margin-bottom: 2rem;
  color: #616161;
  border: 2px solid hsl(217, 91%, 60%, 30%);
  outline: none;
}

input:focus,
textarea:focus {
  border: 2px solid hsl(217, 91%, 60%);
}

button {
  user-select: none;
}

.footer li {
  margin: 0.5rem 0.2rem;
}

.navbar {
  position: absolute;
  left: 20px;
  top: -100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  width: calc(100vw - 45px);
  transition: top 0.4s ease-in-out;
  @apply shadow shadow-teal-500;
}

.navbar.open {
  top: 80px;
}

.navbar ul li {
  margin: 1rem 0;
}

.home {
  background-image: linear-gradient(90deg, #f12711 0%, #f5af19 100%);
}

.video {
  width: calc(100vw - 40px);
  margin: auto;
  height: 200px;
}

.testimonials .article:first-child {
  border-color: var(--red-card);
}

.testimonials .article:first-child .content {
  background-color: var(--red-card);
  padding: 1rem;
}

.testimonials .article:nth-child(2) {
  border-color: var(--yellow-card);
}

.testimonials .article:nth-child(2) .content {
  background-color: var(--yellow-card);
  padding: 1rem;
}

.testimonials .article:nth-child(3) {
  border-color: var(--blue-card);
}

.testimonials .article:nth-child(3) .content {
  background-color: var(--blue-card);
  padding: 1rem;
}

.call__to__action {
  background-image: linear-gradient(90deg, #f5af19 0%, #f12711 100%);
}

.about {
  background-image: linear-gradient(90deg, #f12711 0%, #f5af19 100%);
  padding: 2rem 0;
}

.contact__form input,
.contact__form textarea,
.contact__form button {
  width: calc(100vw - 40px);
}

.invoice__preview {
  margin-top: 1.25rem;
}

@media (min-width: 500px) {
  .video {
    height: 300px;
    width: calc(100vw - 60px);
  }
}

@media (min-width: 640px) {
  .video {
    height: 400px;
  }
}

@media (min-width: 768px) {
  .about .overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .contact__form input,
  .contact__form textarea,
  .contact__form button {
    width: calc(50vw - 40px);
  }
}

@media (min-width: 1024px) {
  .navbar {
    position: relative;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 0;
    background-color: transparent;
    box-shadow: none;
  }

  .navbar ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .navbar ul li {
    margin: 0 10px;
  }

  .home .overlay {
    height: calc(80vh - 10px);
  }

  .video {
    width: calc(80vw - 100px);
    height: 600px;
  }

  .slant {
    border-top-width: 200px;
  }

  .slant-left {
    border-bottom-width: 200px;
  }

  .slant-footer {
    border-top-width: 200px;
    top: -200px;
  }
}

@media (min-width: 1280px) {
  .invoice__preview {
    transform: scale(0.8);
    position: sticky;
    right: 0;
    top: 0;
    margin-top: -6rem;
    margin-bottom: 2rem;
  }
}

`