const { Schema, model } = require("mongoose");

// const imFormSchema = new Schema(
    module.exports = {
  property_zoning: String,
  property_municipality: String,
  warehouse_area_for_lease_from: String,
  warehouse_area_for_lease_to: String,
  office_area_for_lease_from: String,
  office_area_for_lease_to: String,
  showroom_area_for_lease_from: String,
  showroom_area_for_lease_to: String,
  about_the_property: String,
  the_location: String,
  major_rode_one: String,
  major_rode_one_km: String,
  major_rode_one_mins: String,
  major_rode_two: String,
  major_rode_two_km: String,
  major_rode_two_mins: String,
  railway_station_name: String,
  railway_station_km: String,
  railway_station_mins: String,
  CBD_name: String,
  CBD_km: String,
  CBD_mins: String,
  Port_name: String,
  Port_km: String,
  Port_mins: String,
  Airport_name: String,
  Airport_km: String,
  Airport_mins: String,
  ten_key_selling_points: [
    {
      type: String,
    },
  ],
  five_property_features: [
    {
      type: String,
      required: true,
    },
  ],
  site_plan_one: String,
  site_plan_two: String,
  site_plan_three: String,
  aerial_image: String,
  drone_image: String,
  exterior_image: String,
  interior_image: String,
  cgi_image_one: String,
  cgi_image_two: String,
  cgi_image_three: String,
  agency: [
    {
      agency_name: String,
      agency_logo: String,
      agency_rla: String,
      agent_name: String,
      agent_number: Number,
    },
  ],
}
// );

// module.exports = model("ImForm", imFormSchema);
