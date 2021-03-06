import React, { useState, useEffect } from 'react';
import Input from '../components/Input';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate, Link } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import '../App.css';
import Navbar from './Navbar';

import { getDatabase, ref, onValue, update, set, child } from "firebase/database";


function Budget(props) {

  const [home, setHome] = useState('300');
  const [food, setFood] = useState('300');
  const [shopping, setShopping] = useState('300');
  const [utilities, setUtilities] = useState('300');
  const [household, setHousehold] = useState('300');
  const [transportation, setTransportation] = useState('300');
  const [other, setOther] = useState('300');

  const [homeEdit, setHomeEdit] = useState(true);
  const [foodEdit, setFoodEdit] = useState(true);
  const [shoppingEdit, setShoppingEdit] = useState(true);
  const [utilitiesEdit, setUtilitiesEdit] = useState(true);
  const [householdEdit, setHouseholdEdit] = useState(true);
  const [transportationEdit, setTransportationEdit] = useState(true);
  const [otherEdit, setOtherEdit] = useState(true);

  const [userId, setUserId] = useState();
  const [target, setTarget] = useState('')
  const [data, setData] = useState('');




  const auth = getAuth();
  const user = auth.currentUser;


  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setUserId(uid)
      } else {
        navigate('/login')
      }
    });
  });



  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, 'users/' + userId + '/target');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const list = [];
      for (let id in data) {
        list.push(data)
      }
      //setTarget(data)
    });
  }, [userId]);

  function submitHome() {
    const db = getDatabase();
    update(ref(db, 'users/' + userId + '/target'), {
      home: home
    });
    setHomeEdit(true);
  }

  function submitFood() {
    const db = getDatabase();
    update(ref(db, 'users/' + userId + '/target'), {
      food: food
    });
    setFoodEdit(true);
  }

  function submitShopping() {
    const db = getDatabase();
    update(ref(db, 'users/' + userId + '/target'), {
      shopping: shopping
    });
    setShoppingEdit(true);
  }

  function submitUtilities() {
    const db = getDatabase();
    update(ref(db, 'users/' + userId + '/target'), {
      utilities: utilities
    });
    setUtilitiesEdit(true);
  }

  function submitHousehold() {
    const db = getDatabase();
    update(ref(db, 'users/' + userId + '/target'), {
      household: household
    });
    setHouseholdEdit(true);
  }

  function submitTransportation() {
    const db = getDatabase();
    update(ref(db, 'users/' + userId + '/target'), {
      transportation: transportation
    });
    setTransportationEdit(true);
  }

  function submitOther() {
    const db = getDatabase();
    update(ref(db, 'users/' + userId + '/target'), {
      other: other
    });
    setOtherEdit(true);
  }



  useEffect(() => {
    const db = getDatabase();
    const starCountRef = ref(db, 'users/' + userId + '/target');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      if (data == null) {
        setTarget({ home: 0 })
      } else {
        setTarget(data)
      }
    });
  }, [userId]);

  console.log(target)


  if (target) {
    console.log(target.shopping)
    return (
      <div>
        <Navbar />
        <Input setExpense={props.setExpense} setSubmit={props.setSubmit} income={props.income} expense={props.expense} />

        <div className="budget">
          <div className="test">
            <table className="expenses">
              <tr>
                <th>Category</th>
                <th>Expenses</th>
                <th>Target</th>
              </tr>
              <tr>
                <td>Home</td>
                <td><span>$</span>{props.categoryTotal('home')}</td>
                <td>{
                  homeEdit ?
                    <div className="edit">
                      <p className="test1"><span>$</span>{target.home == undefined ? '0' : target.home}</p>
                      <button onClick={() => setHomeEdit(false)} type="submit">edit</button>
                    </div>
                    : <div>
                      <input type="number" onChange={(e) => setHome(e.target.value)} />
                      <button onClick={() => submitHome()}>Submit</button>
                    </div>
                }</td>
              </tr>
              <tr>
                <td>Food</td>
                <td><span>$</span>{props.categoryTotal('food')}</td>
                <td className="test2">{
                  foodEdit ?
                    <div className="edit">
                      <p className="test1"><span>$</span>{target.food == undefined ? '0' : target.food}</p>
                      <button onClick={() => setFoodEdit(false)} type="submit">edit</button>
                    </div>
                    : <form>
                      <input type="number" onChange={(e) => setFood(e.target.value)} />
                      <button onClick={() => submitFood()}>Submit</button>
                    </form>
                }</td>
              </tr>
              <tr>
                <td>Shopping</td>
                <td><span>$</span>{props.categoryTotal('shopping')}</td>
                <td>{
                  shoppingEdit ?
                    <div className="edit">
                      <p className="test1"><span>$</span>{target.shopping == undefined ? '0' : target.shopping}</p>
                      <button onClick={() => setShoppingEdit(false)} type="submit">edit</button>
                    </div>
                    : <form>
                      <input type="number" onChange={(e) => setShopping(e.target.value)} />
                      <button onClick={() => submitShopping()}>Submit</button>
                    </form>
                }</td>
              </tr>
              <tr>
                <td>Utilities</td>
                <td><span>$</span>{props.categoryTotal('utilities')}</td>
                <td>{
                  utilitiesEdit ?
                    <div className="edit">
                      <p className="test1"><span>$</span>{target.utilities == undefined ? '0' : target.utilities}</p>
                      <button onClick={() => setUtilitiesEdit(false)} type="submit">edit</button>
                    </div>
                    : <form>
                      <input type="number" onChange={(e) => setUtilities(e.target.value)} />
                      <button onClick={() => submitUtilities()}>Submit</button>
                    </form>
                }</td>
              </tr>
              <tr>
                <td>Household</td>
                <td><span>$</span>{props.categoryTotal('household')}</td>
                <td>{
                  householdEdit ?
                    <div className="edit">
                      <p className="test1"><span>$</span>{target.household == undefined ? '0' : target.household}</p>
                      <button onClick={() => setHouseholdEdit(false)} type="submit">edit</button>
                    </div>
                    : <form>
                      <input type="number" onChange={(e) => setHousehold(e.target.value)} />
                      <button onClick={() => submitHousehold()}>Submit</button>
                    </form>
                }</td>
              </tr>
              <tr>
                <td>Transportation</td>
                <td><span>$</span>{props.categoryTotal('transportation')}</td>
                <td>{
                  transportationEdit ?
                    <div className="edit">
                      <p className="test1"><span>$</span>{target.transportation == undefined ? '0' : target.transportation}</p>
                      <button onClick={() => setTransportationEdit(false)} type="submit">edit</button>
                    </div>
                    : <form>
                      <input type="number" onChange={(e) => setTransportation(e.target.value)} />
                      <button onClick={() => submitTransportation()}>Submit</button>
                    </form>
                }</td>
              </tr>
              <tr>
                <td>Other</td>
                <td><span>$</span>{props.categoryTotal('other')}</td>
                <td>{
                  otherEdit ?
                    <div className="edit">
                      <p className="test1"><span>$</span>{target.other == undefined ? '0' : target.other}</p>
                      <button onClick={() => setOtherEdit(false)} type="submit">edit</button>
                    </div>
                    : <form>
                      <input type="number" onChange={(e) => setOther(e.target.value)} />
                      <button onClick={() => submitOther()}>Submit</button>
                    </form>
                }</td>
              </tr>
            </table>
          </div>
        </div>
        <Link className="expenses_list" to="/expenses"><button>Expenses List</button></Link>
      </div >
    );
  }
  else {
    return (
      <p>loading{console.log(target)}</p>
    )
  }
}

export default Budget;