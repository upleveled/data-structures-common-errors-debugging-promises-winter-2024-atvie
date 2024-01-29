//  team list with name, job position, role (editor, admin, no rights), and pets (with name and type)

// Array of objects

// const teamRoles = ['admin', 'editor', 'no rights'];
const teamRoles = {
  admin: 'administrator',
  editor: 'editor',
  noRights: 'no rights',
};

const teamJobPosition = {
  developer: 'developer',
  ceo: 'CEO',
};

const teamMembers = [
  {
    firstName: 'Victor',
    jobPosition: teamJobPosition.developer,
    role: teamRoles.editor,
    pets: [
      { name: 'Wuff', type: 'cat' },
      {
        name: 'Miau',
        type: 'dog',
      },
    ],
  },
  {
    firstName: 'Karl',
    jobPosition: teamJobPosition.ceo,
    role: teamRoles.admin,
    pets: [],
  },
];

console.log('original', teamMembers);
// console.log(JSON.stringify(teamMembers, null, 2));

console.log(typeof teamMembers); // object
console.log(Array.isArray(teamMembers)); // true
console.log(Array.isArray({})); // false, not and Array
console.log(typeof teamMembers.firstName); // undefined, because we are not accessing, and we forgot the index
console.log(typeof teamMembers[0].firstName); // string
console.log(typeof teamMembers[0].pets); // object
console.log(typeof null); // object
console.log(Array.isArray(teamMembers[0].pets)); // true

if (typeof teamMembers[0].firstName !== 'string') {
  throw new Error('first name is not a string!');
}

// add new role to the object
teamJobPosition.designer = 'designer';

// MUTATION (MUTABLE)
// add new team member
teamMembers.push({
  firstName: 'Antje',
  jobPosition: teamJobPosition.designer,
  role: teamRoles.editor,
  pets: [],
});

// console.log(teamMembers);

// NOT USING MUTATION (IMMUTABLE)
// add new teamMember (replace the Array) reassigning with spread operator
// const newTeamMembers = [
//   ...teamMembers,
//   {
//     firstName: 'Lukas',
//     jobPosition: teamJobPosition.designer,
//     role: teamRoles.editor,
//     pets: [],
//   },
// ];

// MUTATION
// find team member and update it
const foundTeamMember = teamMembers.find((teamMember) => {
  return teamMember.firstName === 'Antje';
  //   return if (teamMember.name === 'Antje') {
  //     return true}
  //     else {
  // return false
  //     }
  //   }
});

console.log(foundTeamMember);

foundTeamMember.role = teamRoles.admin;

console.log('mutation', teamMembers);

// NOT MUTATION
// replace the teamMembers with a copy
const newTeamMembers = teamMembers.map((teamMember) => {
  if (teamMember.firstName === 'Karl') {
    // creating a new version
    teamMember.pets = [
      { name: 'Bla', type: 'fish' },
      {
        name: 'Blub',
        type: 'jellyfish',
      },
    ];

    // return {
    //   ...teamMember,
    //   pets: [
    //     { name: 'Bla', type: 'fish' },
    //     {
    //       name: 'Blub',
    //       type: 'jellyfish',
    //     },
    //   ],
    // };
  }
  return teamMember;
});

// console.log(newTeamMembers);
console.log(JSON.stringify(newTeamMembers, null, 2));
console.log(JSON.stringify(teamMembers, null, 2));
