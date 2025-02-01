export default async function Doc({
  params
}: {
  params: Promise<{ slug: string[] }>
}) {

  const { slug } = await params;

  if (slug.length === 2) {
    return (
      <h1> Document is {slug[0]} with section {slug[1]}</h1>
    )
  } else if (slug.length === 1) {
    return (
      <h1> Document is {slug[0]}</h1>
    )
  }
}
