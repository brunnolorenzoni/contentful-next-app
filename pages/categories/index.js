export default function CaegoriesPage({ categories }) {
  return (
    <div>
      <h1>Categories</h1>
      <h2>here will have a list</h2>    
    </div>
  )
}

export async function getServerSideProps(context) {

  

  return {
    props: {
      categories: []
    }, // will be passed to the page component as props
  }
}