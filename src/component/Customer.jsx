const customerData = [
    {
      id: '23143',
      name: 'Shirley A. Lape',
      address: 'Cottage Grove, OR 97424'
    },
    {
      id: '96453',
      name: 'Ryan Carroll',
      address: 'Los Angeles, CA 90017'
    },
    {
      id: '65345',
      name: 'Mason Nash',
      address: 'Westminster, CA 92683'
    },
    {
      id: '87832',
      name: 'Luke Parkin',
      address: 'San Mateo, CA 94403'
    },
    {
      id: '09832',
      name: 'Anthony Fry',
      address: 'San Mateo, CA 94403'
    },
    {
      id: '97632',
      name: 'Ryan Carroll',
      address: 'Los Angeles, CA 90017'
    },
    // Two additional customers
    {
      id: '78901',
      name: 'Emma Johnson',
      address: 'New York, NY 10001'
    },
    {
      id: '23456',
      name: 'Jacob Smith',
      address: 'Chicago, IL 60601'
    }
  ];

const Customer = () => (
  <div className="bg-white h-full px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1">
    <strong className="text-gray-700 font-medium">Customer Details</strong>
    <div className="border-x border-gray-200 rounded-sm mt-3">
      <table className="w-full text-gray-700">
        <thead>
          <tr>
            <th>Customer ID</th>
            <th>Name</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {customerData.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default Customer;
