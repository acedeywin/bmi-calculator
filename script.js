
      const users = [];

      const computeBMI = ({
        weight,
        height,
        country
      }) => {
        let countries = ['Chad', 'Sierra Leone', 'Mali', 'Gambia',
'Uganda', 'Ghana', 'Senegal', 'Somalia',
          'Ivory Coast', 'Isreal'
        ];
        const h = height * 0.3048;
        let bmi = weight / (h * h);
        for (let i = 0; i < countries.length; i++) {
          if (countries[i].toLowerCase() === country.toLowerCase()) {
            bmi = bmi * 0.82;
          }
        }
        return bmi.toFixed(1);
      }

      const getSelectedUser = (userId) => {
        return users.find(({
          id
        }) => id === userId);
      }

      const displaySelectedUser = ({
        target
      }) => {
        let user = getSelectedUser(target.value);

        let properties = Object.keys(user);
        properties.forEach(prop => {
          let element = document.querySelector(`span[data-${prop}-value]`);
          if (element) {
            element.textContent = user[prop]
          }
        });
      }

      const letsCalculateBMI = () => {
        let selected = document.querySelector("select").value;

        let user = getSelectedUser(selected);

        let bmi = computeBMI(user);
        let outcome = document.querySelector("#outcome");
        outcome.querySelector('p').textContent = bmi;
      }

      const powerupTheUI = () => {
        document.querySelector("select").addEventListener('change',
displaySelectedUser);
        document.querySelector("#oracle").addEventListener('click',
letsCalculateBMI)
      }

      const displayUsers = (users) => {
        users.forEach(user => {
          let newUser = document.createElement("option");
          newUser.value = user.id;
          newUser.textContent = user.name;
          document.querySelector("select").appendChild(newUser);
        });
      }

      const fetchAndDisplayUsers = () => {
        const api =
'https://randomapi.com/api/y1lfp11q?key=LEIX-GF3O-AG7I-6J84';
        fetch(api).then(result => result.json()).then(({
          results
        }) => {
          const [user] = results;
          users.push(user);
          displayUsers([user]);
        });
        users.push({
          age: 40,
          weight: 75,
          height: 6,
          gender: 'Male',
          country: 'Nigeria',
          name: 'Charles Odili',
          id: 'dfhb454768DghtF'
        });
        users.push({
          age: 30,
          weight: 67,
          height: 6,
          country: 'China',
          gender: 'Male',
          name: 'Daniel Kigali',
          id: 'psbf1533400803'
        });

        displayUsers(users);
      };

      const startApp = () => {
        powerupTheUI();
        fetchAndDisplayUsers();
      };

      startApp();

   