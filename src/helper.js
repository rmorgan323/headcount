


export default class DistrictRepository {
	constructor(rawData) {
		
		this.data = []
		this.cleanData = this.cleanData(rawData)
		console.log(this.data)
	}

	cleanData(rawData) {
		this.data = rawData.reduce((cleanObj, dataObj) => {
			let loc = dataObj.Location

			if (!cleanObj[loc]) {
				cleanObj[loc] = {}
			}

			cleanObj[loc][dataObj.TimeFrame] = dataObj.Data

			return cleanObj
		}, {})

	}
}