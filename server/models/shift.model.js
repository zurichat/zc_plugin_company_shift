module.exports = (mongoose) => {
	var schema = mongoose.Schema(
		{
			employee_name: String,
			title: String,
			department: String,
			creation_date: String,
			// start_time: ,
			// end_time: ,
			// shiftmode:
		},
		{ timestamps: true }
	);

	schema.method("toJSON", function () {
		const { __v, _id, ...object } = this.toObject();
		object.id = _id;
		return object;
	});

	const Shift = mongoose.model("shift", schema);
	return Shift;
};
// console.log(Shift);

//////////////////////////////////////
// module.exports = mongoose => {
//     const Shift = mongoose.model(
//       "shift",
//       mongoose.Schema(
//         {
//           name:String,
//           title:String
//         },
//         { timestamps: true }
//       )
//     );

//     return Shift;
//   };
