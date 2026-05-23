import TutorDetailClient from "./TutorDetailClient";

export async function generateMetadata({ params }) {

  try {

    const { id } = await params;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/tutors/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {

      return {
        title: "Tutor Details",
      };
    }

    const tutor = await res.json();

    return {
      title: tutor?.tutorName || "Tutor Details",
    };

  } catch (error) {

    console.error(error);

    return {
      title: "Tutor Details",
    };
  }
}

export default async function TutorDetailsPage({ params }) {

  const { id } = await params;

  return (
    <TutorDetailClient id={id} />
  );
}