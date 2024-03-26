'use server'
export async function getPlanets(params: {searchParams?: string} | undefined) {
    console.log(`https://swapi.dev/api/planets${(params && params.searchParams) ? `?search=${params.searchParams}` : ''}`, { cache: 'no-store' })
    const res = await fetch(`https://swapi.py4e.com/api/planets${(params && params.searchParams) ? `?search=${params.searchParams}` : ''}`, { cache: 'no-store' })
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error('Failed to fetch data')
    }

    return res.json()
  }
   