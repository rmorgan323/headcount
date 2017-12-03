
export default class DistrictRepository {
  constructor(rawData) {
    this.data = {};
    this.cleanData(rawData);
  }

  cleanData(rawData) {
    this.data = rawData.reduce((cleanObj, dataObj) => {
      let loc = dataObj.Location.toUpperCase();
      let dataVal = dataObj.Data;

      if (dataVal === 'N/A' || dataVal === '#DIV/0!') {
        dataVal = 0;
      }
      let cleanVal = Math.round(dataVal * 1000) / 1000;

      if (!cleanObj[loc]) {
        cleanObj[loc] = { location: loc, data: {} };
      }

      cleanObj[loc]['data'][dataObj.TimeFrame] = cleanVal;

      return cleanObj;
    }, {});
  }

  findByName(string = '') {
    return this.data[string.toUpperCase()];
  }

  findAllMatches(string) {
    let y = [];

    if (string) {
      let x = Object.keys(this.data).filter(key => {
        if (key.includes(string.toUpperCase())) {
          return key;
        }
      });

      y = x.reduce((accum, foundKey) => {
        accum.push(this.data[foundKey]);
        return accum;
      }, []);
    } else {
      y = Object.keys(this.data).map(key => {
        return this.data[key];
      });
    }
    return y;
  }

  findAverage(location) {
    let locationObj = this.findByName(location);
    let data = Object.keys(locationObj.data);
    let average = data.reduce((accu, year) => {
      accu += locationObj.data[year];
      return accu;
    }, 0);

    return Math.round((average / data.length) * 1000) / 1000;
  }

  compareDistrictAverages(locOne, locTwo) {
    let location1 = this.findAverage(locOne);
    let location2 = this.findAverage(locTwo);
    let result = Math.round((location1 / location2) * 1000) / 1000;

    return {
      loc1: locOne.toUpperCase(),
      avg1: location1,
      loc2: locTwo.toUpperCase(),
      avg2: location2,
      compare: result
    };
  }
}
