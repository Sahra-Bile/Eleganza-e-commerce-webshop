import { useState } from 'react';
import categoryJson from  '/Users/sahra/PROJEKT/e-commerce-shopp/src/local-joson/categories.json';
import './categoris.scss';


export const CreateCategories =() =>{
 
  const [categories,setCategories] = useState(categoryJson)
    
    const html = categories.map( (category) =>{
  
      return(<div className='categories-container'key={category.id}>
        
     

      <div className='category-container'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${category.imageUrl})`,
        }}
      />
    <div className='category-body-container'>
      <h2>{category.title}</h2>
      <p>shop now</p>
    </div>
    </div>
    </div>
    );
  
    });
  
    return(<div className='categories'>
    {html}
  
    </div>)
  }
  