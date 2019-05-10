/*
* In javascript the variables are declared in camelcase but I like use snake case,
* if you want you can rename them as you want and remove the rule in .eslintrc line 35
*/
const base_url = env('BASE_URL', 'http://localhost:8000');
const api_url = base_url + '/api/v1/slider';


export default {
  sliders: api_url + '/sliders',
  slides: api_url + '/slides'
}
