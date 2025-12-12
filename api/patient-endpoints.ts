export async function getAllPatients() {
  const username = process.env.BASIC_AUTH_USERNAME;
  const password = process.env.BASIC_AUTH_PASSWORD;

  const authHeader = 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64');

  const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
    headers: {
      Authorization: authHeader,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch patients. Status: ${response.status}`);
  }

  const data = await response.json();
  return data;
}

export async function getPatient(name: string) {
  const username = process.env.BASIC_AUTH_USERNAME;
  const password = process.env.BASIC_AUTH_PASSWORD;

  const authHeader = 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64');

   // Fetch all patients
  const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev', {
    headers: {
      Authorization: authHeader,
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch patients. Status: ${response.status}`);
  }

  const data = await response.json();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const patient = data.find((p:any) => p.name.toLowerCase() === name.toLowerCase());

  if (!patient) {
    throw new Error(`Patient with name "${name}" not found`);
  }

  return patient;
}

