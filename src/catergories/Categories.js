import { useState } from 'react';
import './Categories.css'

const lists = [
    {
      num: 1,
      categories: [
        "A Boy's Name",
        "US Cities",
        "Things That Are Cold",
        "School Supplies",
        "Pro Sports Teams",
        "Insects",
        "Breakfast Foods",
        "Furniture",
        "TV Shows",
        "Things Found In The Ocean",
        "Presidents",
        "Product Names"
      ]
    },
    {
      num: 2,
      categories: [
        "Famous Females",
        "Medicine/Drugs",
        "Things Made Of Metal",
        "Hobbies",
        "People In Uniform",
        "Things You Plug In",
        "Animals",
        "Languages",
        "Names Used In The Bible",
        "Junk Food",
        "Things That Grow",
        "Companies"
      ]
    },
    {
      num: 3,
      categories: [
        "Articles Of Clothing",
        "Desserts",
        "Car Parts",
        "Things Found On A Map",
        "Athletes",
        "4-Letter Words",
        "Items In A Refrigerator",
        "Farm Animals",
        "Street Names",
        "Things At The Beach",
        "Colors",
        "Tools"
      ]
    },
    {
      num: 4,
      categories: [
        "Heros",
        "Gifts/Presents",
        "Terms Of Endearment",
        "Kinds Of Dances",
        "Things That Are Black",
        "Vehicles",
        "Tropical Locations",
        "College Majors",
        "Dairy Products",
        "Things In A Souvenir Shop",
        "Items In Your Purse/Wallet",
        "World Records"
      ]
    }
  ];

const Categories = ({ hide, setHide }) => {
    const [list, setList] = useState(0);

    const nextList = () => {
        if(list < lists.length - 1){
            setList(list + 1);
        } else {
            setList(0);
        }
    }

    return(
        <div className='Categories'>
            <div className='Categories-Main'>
                <div className="Categories-Main-Top">
                    <h1>CATEGORIES</h1>
                    <h1>List {lists[list].num}</h1>
                </div>
                <ol className="Categories-Main-Display">
                    {lists[list].categories.map(item => (
                        <li className={hide ? 'hide' : null}>{item}</li>
                    ))}
                </ol>
            </div>
            <div onClick={nextList}className="Categories-Secondary">
                <h1 className='Categories-Secondary-H1'>NEXT LIST</h1>
            </div>
        </div>
    );
}
export default Categories;