import { useEffect, useState } from 'react';

function useHeroDataCheck() {
  const [HeroData, setHeroData] = useState([]);

  useEffect(() => {
    async function API() {
      fetch(`https://us-central1-dapp-pocket.cloudfunctions.net/cappuuApp/projects`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer c46da20b-f2cc-4e69-85c4-20d83c532abe'
        }
      }).then(async (res) => {
        const heroesData = await res.json();
        setHeroData(heroesData);
      });
    }
    API();
  }, []);

  return HeroData;
}

export default useHeroDataCheck;
