export const getStaticPaths = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json())

  const paths = data.map((item) => {
    return {
      params: { id: item.id.toString() },
    }
  })

  return {
    paths,
    fallback: false,
  }
}
export const getStaticProps = async ({ params }) => {
  const { id } = params
  const ninja = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => res.json())

  return {
    props: { ninja },
  }
}

const Details = ({ ninja }) => {
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
    </div>
  )
}

export default Details
