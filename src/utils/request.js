export async function GetUSPopulationData(year) {
  const temp_year= year? year: 'latest'
    try {
      const response = await fetch(
      'https://datausa.io/api/data?drilldowns=State&measures=Population&year='+temp_year
      );
      const json = await response.json();
      console.log('data is', json.data);
      return json.data;
    } catch (error) {
      console.error('Unable to load US Population Data:', error);
      return [];
    }
  }