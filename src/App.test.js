import React from 'react';
import { render, waitForElement } from '@testing-library/react';
import App from './App';

test('renders please wait whilst fetching the api data', () => {
  const { getByText } = render(<App />);
  const pleaseWait = getByText(/... Please wait while the exercise list is populated!/i);
  expect(pleaseWait).toBeInTheDocument();
});

test('makes a fetch call to the expected api', ()=> {
  const url = 'https://private-922d75-recruitmenttechnicaltest.apiary-mock.com/customexercises/';
  const fetchSpy = jest.spyOn(window, 'fetch');
  render(<App />);
  expect(fetchSpy).toBeCalledTimes(1);
  expect(fetchSpy).toBeCalledWith(url);
});


test('correctly renders the data from the api on a succesful call', async ()=> {
  const mockApiResponse = {
    "exercises":[
     {
        "id":"5c10de5792437a5c67e74ba2",
        "name":"Pull Up",
        "transcript":"<ol><li style=\"text-align: left;\">Grab the pull up bar, hands facing forwards. Retract your shoulder blades and tilt your torso back. <b>First Position</b>.</li><li style=\"text-align: left;\">Bringing your lats up to your elbows, pull your torso up until your shoulders reach the height of your hands at <b>Second Position</b>. Ensure you contract your back muscles throughout every rep.</li><li style=\"text-align: left;\">Slow and controlled, fall back into <b>First Position</b>.</li><li style=\"text-align: left;\">Finish your reps.</li></ol><p style=\"text-align: left;\">There's no place for egos in the gym. Always lift with a weight that's comfortable and controllable. If you experience any pain, put your safety first and stop.</p>",
        "female":{
           "image":"https://cdni.gs.lightning-e.com/media/5c0e516f72fc52b810eb7f57-malewidegrippullupthumbnail.jpg"
        },
        "male":{
           "image":"https://cdni.gs.lightning-e.com/media/5c0e4717ee0147fd16ef6003-malepullupsthumbnail.jpg"
        },
        "bodyAreas":[
           "Back",
           "Biceps"
        ]
     }
   ]}
  const fetchSpy = jest.spyOn(window, 'fetch').mockImplementationOnce(() => {
    return Promise.resolve({
      json: () => Promise.resolve(mockApiResponse),
    })
  })
  const { getByText } = render(<App />);
  const bodyAreaText = await waitForElement(() => getByText(/Grab the pull up bar, hands facing forwards. Retract your shoulder blades and tilt your torso back./i));
  expect(bodyAreaText).toBeInTheDocument();
});
