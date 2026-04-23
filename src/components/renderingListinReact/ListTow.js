import React, { useState } from 'react';

const categories = [
    { id: 1, name: 'Technology', c: (<>
    <h2>Technology</h2>
    <p>Technology is the application of scientific knowledge for practical purposes, especially in industry. It encompasses a wide range of fields, including information technology, electronics, telecommunications, and more. Technology has revolutionized the way we live, work, and communicate, making our lives easier and more efficient.</p>  
    </>) },
    { id: 2, name: 'Health', c: (<>
    <h2>Health</h2><p>Health is a state of complete physical, mental and social well-being and not merely the absence of disease or infirmity.</p></>) },
    { id: 3, name: 'Finance', c: (<><h2>Finance</h2><p>Finance is the study of money management, including investing, borrowing, lending, budgeting, and forecasting.</p></>) },
    { id: 4, name: 'Education', c: (<><h2>Education</h2><p>Education is the process of facilitating learning, or the acquisition of knowledge, skills, values, beliefs, and habits.</p></>) },
    { id: 5, name: 'Entertainment', c: (<><h2>Entertainment</h2><p>Entertainment is a form of activity that has the potential to produce a sense of enjoyment or satisfaction for its participants.</p  ></>) }
    ];

const ListCategories = categories.map(category => (
    <li key={category.id}>{category.name}: {category.c}</li>
    ));
  function ListTwo() {
    const [selectedCategory, setSelectedCategory] = useState(null);
  
    const handleCategoryClick = (category) => {
      setSelectedCategory(category);
    };
  
    return (
      <div>
        <h1>Categories</h1>
        <ul>
          {categories.map(category => (
            <li key={category.id} onClick={() => handleCategoryClick(category)}>
              {category.name}
            </li>
          ))}
        </ul>
        {selectedCategory && (
          <div>
            <h2>{selectedCategory.name}</h2>
            <p>{selectedCategory.c}</p>
          </div>
        )}
      </div>
    );
  }
  
  export default ListTwo;