
import getApi from '/Users/km00776/Desktop/ReactProjects/TechnicalAssessment/api/demoAPI.js'
import 'isomorphic-fetch';

it("Test API", async function() {

    const response = await getApi();
    console.warn(response);
    console.warn(response[0].camera['full_name']);
    expect(response[0].camera['full_name']).toEqual('Front Hazard Avoidance Camera');
});