interface PartyColorEntry {
  ring: string
  bar: string
}

interface PartyColorMap {
  [key: string]: PartyColorEntry
}

// Single source of truth for each party's color classes
// You can expand this map to include as many parties as you need
const partyColourMap: PartyColorMap = {
  labour: {
    ring: 'ring-red-500',
    bar: 'bg-red-500'
  },
  independent: {
    ring: 'ring-gray-500',
    bar: 'bg-gray-500'
  },
  conservative: {
    ring: 'ring-blue-600',
    bar: 'bg-blue-600'
  }
  // ... Add more parties and colors here
}

// This function returns Tailwind classes for ring + accent bar
const getPartyColours = (party: string): PartyColorEntry => {
  const lowerParty = party.toLowerCase()
  return (
    partyColourMap[lowerParty] ?? {
      ring: 'ring-purple-700',
      bar: 'bg-purple-800'
    }
  )
}
