const people = [
    {
      name: 'Leslie Alexander',
      role: 'Co-Founder / CEO',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'John Doe',
      role: 'CTO',
      imageUrl:
        'https://images.unsplash.com/photo-1502685104226-e9f9c7f6a4f4?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      name: 'Jane Smith',
      role: 'CFO',
      imageUrl:
        'https://images.unsplash.com/photo-1518020362028-1f87b3c85d8f?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  ]
  
  export default function OurTeam() {
    return (
      <div className="bg-white py-24 sm:py-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet Our Leadership</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper suspendisse.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 md:grid-cols-3">
            {people.map((person) => (
              <li key={person.name} className="flex flex-col items-center text-center">
                <img alt="" src={person.imageUrl} className="h-24 w-24 rounded-full shadow-lg mb-4" />
                <h3 className="text-lg font-semibold leading-7 text-gray-900">{person.name}</h3>
                <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }