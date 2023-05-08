
import logo from "./images/logo.png";

function User() {
  var user = [
    {
      Image: <img src={logo} alt={logo} width={40} height={40} />,
      Name: "chowdry k",
      Mobile: 9000002220,
      Email: "chowdry@gmail.com",
    },
    {
      Image: <img src={logo} alt={logo} width={40} height={40} />,
      Name: "Ganesh R",
      Mobile: 9000002221,
      Email: "ganesh@gmail.com",
    },
    {
      Image: <img src={logo} alt={logo} width={40} height={40} />,
      Name: "Pavithran",
      Mobile: 9000002222,
      Email: "pavithran@gmail.com",
    },
  ];

  console.log("user data", user);

  return (
    <div>
      <table id="table1" border={0}>
        <h1 id="h1">Select User</h1>
        <input type="search" placeholder="search" id="search" />
      </table>
      <table id="table2" border={1}>
        <tr>
          <td>
            <input type="checkbox" />
          </td>
          <td>Name</td>
          <td>Mobile</td>
          <td>Email</td>
          <td>Image</td>
          <td>Action</td>
        </tr>
        {user.map((user, i) => (
          <tr>
            <td>
              <input type="checkbox" />
            </td>
            <td>{user.Name}</td>
            <td>{user.Mobile}</td>
            <td>{user.Email}</td>
            <td>{user.Image}</td>
            <td>
              <button id="class1">Edit Message</button>
            </td>
          </tr>
        ))}
      </table>

      <button id="class2" type="sumbit" onClick={user}>
        Submit
      </button>

      <button id="class3" type="number">
        1
      </button>
      <button id="class4" type="number">
        2
      </button>
      <button id="class5" type="text">
        next
      </button>

      <div>
        <label>
          <select id="data1">
            <option value="">Data Table Username </option>
          </select>
        </label>

        <label>
          <select id="data2">
            <option value="">Data Table Username </option>
          </select>
        </label>

        <label>
          <select id="data3">
            <option value="">Data Table Username </option>
          </select>
        </label>
      </div>
    </div>
  );
}

export default User;

/*{
     
      Image: <img src={logo} alt={logo}  width={40} height={40}/>,
      Name: "arun",
      Mobile: 9000002223,
      Email: "arun@gmail.com",
    },
    {
    
      Image: <img src={logo} alt={logo}  width={40} height={40}/>,
      Name: "rahul",
      Mobile: 9000002224,
      Email: "rahul@gmail.com",
    },
    {
     
      Image: <img src={logo} alt={logo}  width={40} height={40}/>,
      Name: "virat",
      Mobile: 9000002225,
      Email: "virat@gmail.com",
    },
    {
     
      Image: <img src={logo} alt={logo}  width={40} height={40}/>,
      Name: "dhoni",
      Mobile: 9000002226,
      Email: "dhoni@gmail.com",
    },
    {
     
      Image: <img src={logo} alt={logo}  width={40} height={40}/>,
      Name: "siva",
      Mobile: 9000002227,
      Email: "siva@gmail.com",
    },
    {
     
      Image: <img src={logo} alt={logo}  width={40} height={40}/>,
      Name: "vijay",
      Mobile: 9000002228,
      Email: "vijay@gmail.com",
    },
    {
     
      Image: <img src={logo} alt={logo}  width={40} height={40}/>,
      Name: "karthi",
      Mobile: 9000002229,
      Email: "karthi@gmail.com",
    },

    <div>
           <table>
           <h1 className="data1">
           Data Table Username
           </h1>
          </table>
        
          <table>
           <h1 className="data2">Data Table Username</h1>
          </table>
        
          <table>
          <h1 className="data3">Data Table Username</h1>
         </table>
       
       
       </div>     
    
    */
