
export default class DistrictRepository {
	constructor(rawData) {
		
		this.data = {}
		this.cleanData(rawData)
		// console.log(this.data)
	}

	cleanData(rawData) {
		this.data = rawData.reduce((cleanObj, dataObj) => {
			let loc = dataObj.Location.toUpperCase();
			let dataVal = dataObj.Data;
			if (dataVal === 'N/A') {
				dataVal = 0
			}
			let cleanVal = Math.round(dataVal * 1000) / 1000

			if (!cleanObj[loc]) {
				cleanObj[loc] = { location: loc.toUpperCase(), data: {} }
			}

			cleanObj[loc]['data'][dataObj.TimeFrame] = cleanVal

			return cleanObj
		}, {})
	}

	findByName(string) {
		if (string) {
			let x = this.data[string.toUpperCase()]
			return x;
		}
	}

}
