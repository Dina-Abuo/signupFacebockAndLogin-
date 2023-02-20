import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from '../../Data/main';
export default function FromSignUp() {
    const [setFrisName] = useState(" ");
    const [setscandName] = useState(" ");
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");
    const [setday] = useState(" ");
    const [setmonth] = useState(" ");
    const [setyear] = useState(" ");
    const [setMale] = useState(" ");
    const [setFemal] = useState(" ");
    const signUp = async () => {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password);
            console.log('credintials ', user);
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <div>


            <form className="form-sigin  needs-validation" noValidate>
                <div className="row">
                    <div className="col-6">
                        <input
                            type="text"
                            className="First-name"
                            placeholder=" First name"
                            name="FirstName"
                            required
                            onChange={(e) => { setFrisName(e.target.value) }} />
                        <div className="invalid-feedback"
                            style={{ background: '#be4b49', color: '#fff', padding: '10px', borderRadius: '5px', position: 'relative', zIndex: '6', top: '-10px', right: '-10px' }}>
                            whats your name?
                        </div>
                    </div>
                    <div className="col-6">
                        <input
                            type="text"
                            className="Surname"
                            placeholder="Surname"
                            name="Surname"
                            required
                            onChange={(e) => { setscandName(e.target.value) }} />
                        <div className="invalid-feedback"
                            style={{ background: '#be4b49', color: '#fff', padding: '10px', borderRadius: '5px', position: 'relative', zIndex: '6', top: '-10px' }}>
                            whats your name?
                        </div>
                    </div>
                </div>
                <input
                    type="email|number"
                    className="Mobile-or-email mt-3"
                    placeholder="Mobile number or email address "
                    name="email"
                    required
                    onChange={(e) => { setEmail(e.target.value) }} />
                <input
                    type="password"
                    className="new-password mb-2 mt-3"
                    placeholder="New  password"
                    name="password"
                    required
                    onChange={(e) => { setPassword(e.target.value) }} />
                <p className="pragrph-sign-up">Date of bith </p>
                <div className="row mb-2 ">
                    <div className="col-4">
                        <select className="days" name="day" required onChange={(e) => { setday(e.target.value) }}>
                            <option value="1"> 1</option>
                            <option value=" 2 "> 2</option>
                            <option value=" 3 "> 3</option>
                            <option value=" 4 "> 4</option>
                            <option value=" 5 "> 5</option>
                            <option value=" 6 "> 6</option>
                            <option value=" 7 "> 7</option>
                            <option value=" 8 "> 8</option>
                            <option value=" 9 "> 9</option>
                            <option value="10"> 10</option>
                            <option value=" 11 "> 11</option>
                            <option value=" 12 "> 12</option>
                            <option value=" 13 "> 13</option>
                            <option value=" 14 "> 14</option>
                            <option value=" 15 "> 15</option>
                            <option value=" 16 "> 16</option>
                            <option value=" 17 "> 17</option>
                            <option value=" 18 "> 18</option>
                            <option value=" 19 "> 19</option>
                            <option value="20"> 20</option>
                            <option value=" 21 "> 21</option>
                            <option value=" 22 "> 22</option>
                            <option value=" 23 "> 23</option>
                            <option value=" 24"> 24</option>
                            <option value=" 25 "> 25</option>
                            <option value=" 26 "> 26</option>
                            <option value=" 27 "> 27</option>
                            <option value=" 28 "> 28</option>
                            <option value=" 29 "> 29</option>
                            <option value="30"> 30</option>
                        </select>
                    </div>
                    <div className="col-4">
                        <select className="months" name="month" required onChange={(e) => { setmonth(e.target.value) }}>
                            <option value="Jan">Jan</option>
                            <option value="Feb">Feb</option>
                            <option value="Mar">Mar</option>
                            <option value="Apr">Apr</option>
                            <option value="May">May</option>
                            <option value="JUn">JUn</option>
                            <option value="Jul">Jul</option>
                            <option value="Aug">Aug</option>
                            <option value="Sep">Sep</option>
                            <option value="Oct">Oct</option>
                            <option value="Nov">Nov</option>
                            <option value="Dec">Dec</option>
                        </select>
                    </div>
                    <div className="col-4">
                        <select className="years" name="year" required onChange={(e) => { setyear(e.target.value) }}>
                            <option value="2023">2023</option>
                            <option value="2022">2022</option>
                            <option value="2021">2021</option>
                            <option value="2020">2020</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                            <option value="2013">2013</option>
                            <option value="2012">2012</option>
                            <option value="2011">2011</option>
                            <option value="2010">2010</option>
                            <option value="2009">2009</option>
                            <option value="2008">2008</option>
                            <option value="2007">2007</option>
                            <option value="2006">2006</option>
                            <option value="2005">2005</option>
                            <option value="2004">2004</option>
                            <option value="2003">2003</option>
                            <option value="2002">2002</option>
                            <option value="2001">2001</option>
                            <option value="2000">2000</option>
                            <option value="1999">1999</option>
                            <option value="1998">1998</option>
                            <option value="1997">1997</option>
                            <option value="1996">1996</option>
                            <option value="1995">1995</option>
                            <option value="1994">1994</option>
                            <option value="1993">1993</option>
                            <option value="1992">1992</option>
                            <option value="1991">1991</option>
                            <option value="1990">1990</option>
                        </select>
                    </div>
                </div>
                <p className="pragrph-sign-up">Gender</p>
                <div className="row">
                    <div className="col-6">
                        <div className="div-femal">
                            <label htmlFor="femal" style={{ marginRight: '68%' }}>Femal</label>
                            < input id="femal" type="radio" value="male" name="Gender" required onChange={(e) => { setFemal(e.target.value) }} />
                        </div>
                    </div>
                    <div className="col-6 ">
                        <div className="div-male">
                            <label htmlFor="male" style={{ marginRight: '70%' }}>Male</label>
                            <input id="male" type="radio" value="male" name="Gender" required onChange={(e) => { setMale(e.target.value) }} />
                        </div>
                    </div>
                </div>
                <div className="p-3">
                    <button className="button-sign" type="submit" onClick={signUp}>Sign Up </button>
                </div>
            </form>




        </div>
    )
}

