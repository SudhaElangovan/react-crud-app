import React, { useState } from 'react'

const CrudApp = () => {
  const [items, setItems] = useState([])
  const [newItem, setNewItem] = useState("")
  const [editIndex, setEditIndex] = useState(null)

  const handleAdd = () => {
    if (newItem.trim() === "") return
    setItems([...items, newItem])
    setNewItem("")
  }

  const handleDelete = (index) => {
    const updated = items.filter((_, i) => i !== index)
    setItems(updated)
  }

  const handleEdit = (index) => {
    setNewItem(items[index])
    setEditIndex(index)
  }

  const handleUpdate = () => {
    if (editIndex === null || newItem.trim() === "") return
    const updated = [...items]
    updated[editIndex] = newItem
    setItems(updated)
    setNewItem("")
    setEditIndex(null)
  }

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Simple React CRUD</h2>
      <input
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Enter item"
      />
      {editIndex !== null ? (
        <button onClick={handleUpdate}>Update</button>
      ) : (
        <button onClick={handleAdd}>Add</button>
      )}
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CrudApp
