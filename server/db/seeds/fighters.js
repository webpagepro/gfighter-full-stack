
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('fighters').del()
    .then(function () {
      // Inserts seed entries
      return knex('fighters').insert([
        {
          "id": 1,
          "strength": 72,
          "image_url": "http://placehold.it/320x320",
          "name": "Desiree Porter",
          "bio": "Eu incididunt velit aliquip excepteur consequat eu Lorem voluptate nostrud. Cillum Lorem aliqua excepteur anim commodo culpa. Lorem cupidatat laboris irure laborum cillum tempor. Laborum non aliquip et consequat aute cupidatat culpa exercitation nostrud. Culpa non irure duis ullamco in sint esse. Ea fugiat exercitation dolor adipisicing et sint ex deserunt consectetur nulla aliqua dolore enim. Non pariatur esse ea reprehenderit fugiat cupidatat aute cupidatat labore.\r\n"
        },
        {
          "id": 2,
          "strength": 83,
          "image_url": "http://placehold.it/320x320",
          "name": "Noemi Rojas",
          "bio": "Pariatur id laborum dolore in esse velit minim incididunt consectetur do officia reprehenderit ullamco. Incididunt consequat dolore do mollit quis aute. Sunt dolor nulla veniam non proident esse quis. Elit sint minim proident excepteur laboris cupidatat id adipisicing do quis Lorem in et. Fugiat amet incididunt veniam aliquip amet voluptate do culpa culpa elit velit deserunt cillum. Tempor tempor nostrud laboris do nulla laborum laboris minim quis irure ipsum. Eiusmod sunt nulla laboris excepteur pariatur labore nulla reprehenderit.\r\n"
        },
        {
          "id": 3,
          "strength": 74,
          "image_url": "http://placehold.it/320x320",
          "name": "Cobb Armstrong",
          "bio": "Id sit nostrud consequat consectetur non est mollit tempor aute. Ex duis ipsum velit ut officia minim duis cillum adipisicing ut cupidatat adipisicing. Eu dolor in labore reprehenderit aliqua. Velit pariatur pariatur ea irure magna qui reprehenderit anim qui proident. Pariatur do reprehenderit laboris enim velit in commodo exercitation.\r\n"
        },
        {
          "id": 4,
          "strength": 84,
          "image_url": "http://placehold.it/320x320",
          "name": "Burris Reese",
          "bio": "Exercitation ea esse labore sint aute voluptate in veniam incididunt sunt deserunt aliqua. Consequat minim mollit nulla exercitation mollit qui magna. Enim do non commodo occaecat aute ad. Aliquip tempor non aute minim amet voluptate irure consectetur velit velit qui esse qui velit. Eu do minim eu eiusmod eiusmod esse est. Duis excepteur ex nisi officia ipsum est pariatur Lorem voluptate in ullamco dolore nisi. Sint nisi voluptate sint qui.\r\n"
        },
        {
          "id": 5,
          "strength": 73,
          "image_url": "http://placehold.it/320x320",
          "name": "Avery Leon",
          "bio": "Officia excepteur voluptate minim mollit deserunt. Commodo enim quis anim nostrud labore et aliqua enim quis irure fugiat. Sit magna labore magna dolore eu non irure officia esse. Dolore velit sunt incididunt id est dolor ipsum aliqua enim consectetur.\r\n"
        },
        {
          "id": 6,
          "strength": 75,
          "image_url": "http://placehold.it/320x320",
          "name": "Alba Craft",
          "bio": "Et anim culpa irure est incididunt magna commodo. Excepteur sint laboris exercitation in dolore tempor. Do dolor aute esse laborum adipisicing commodo ex fugiat minim minim ex duis sit. Ex labore laboris adipisicing ea est esse irure ut. Mollit ad reprehenderit ipsum velit incididunt eiusmod duis. Consequat laborum labore exercitation veniam.\r\n"
        },
        {
          "id": 7,
          "strength": 64,
          "image_url": "http://placehold.it/320x320",
          "name": "Bray Aguilar",
          "bio": "Ad mollit labore aute occaecat consectetur eiusmod laborum excepteur eu esse. Pariatur ut qui ullamco velit non dolor magna irure. Ullamco mollit ut do dolor magna officia quis ea enim exercitation do. Non minim Lorem ex consectetur non dolore. Deserunt est sunt sunt veniam pariatur. Non in nulla aliquip nulla reprehenderit est esse aliqua.\r\n"
        },
        {
          "id": 8,
          "strength": 62,
          "image_url": "http://placehold.it/320x320",
          "name": "Milagros Barry",
          "bio": "Eiusmod ut ut incididunt ut. Eu ex do consectetur aliquip nisi anim eu. Veniam sunt eiusmod velit anim laboris aliqua mollit cupidatat. Eiusmod ut et id reprehenderit Lorem consectetur occaecat laboris eu id Lorem consectetur.\r\n"
        },
        {
          "id": 9,
          "strength": 92,
          "image_url": "http://placehold.it/320x320",
          "name": "Stacie Knapp",
          "bio": "Anim ad aliquip veniam sit consectetur occaecat culpa commodo. Tempor id aute nostrud commodo pariatur laborum deserunt qui amet. Proident excepteur eiusmod ad enim qui in amet ex amet et occaecat velit laborum. Nisi proident officia cillum qui et sit dolor deserunt occaecat. Eiusmod ad dolor consequat fugiat. Consectetur magna in incididunt occaecat sint ipsum officia sint sunt ad quis et consectetur et. Id reprehenderit est ullamco occaecat ad.\r\n"
        },
        {
          "id": 10,
          "strength": 94,
          "image_url": "http://placehold.it/320x320",
          "name": "Whitney Burch",
          "bio": "Ad tempor deserunt eiusmod id consectetur. Ullamco id consequat anim sit consequat mollit ad consectetur non laborum. Duis do nulla magna consequat nulla voluptate laborum ex labore consectetur excepteur laboris. Anim id et sint nostrud Lorem incididunt non esse. Labore minim aliqua nisi consectetur deserunt laborum cupidatat.\r\n"
        }
      ]);
    });
};
