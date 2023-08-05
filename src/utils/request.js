export async function GetUSPopulationData() {
    try {
      const response = await fetch(
        'https://datausa.io/api/data?drilldowns=State&measures=Population&year=latest'
      );
      const json = await response.json();
      return json.data;
    } catch (error) {
      console.error('Unable to load US Population Data:', error);
      return [];
    }
  }