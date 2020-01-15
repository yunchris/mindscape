
export const fetchScapes = data => (
  $.ajax ({
    method: 'GET',
    url: `api/scapes`,
    data
  })
);

export const fetchScape = id => (
  $.ajax({
    method: 'GET',
    url: `api/scapes/${id}`
  })
)