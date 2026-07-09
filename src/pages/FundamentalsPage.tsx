import { Navigate, useParams } from 'react-router-dom';
import { EmptyState } from '../components/EmptyState';
import { getFirstLessonRouteForFundamentals } from '../data/lesson-reader';

export function FundamentalsPage() {
  const { slug } = useParams();
  const redirectTo = getFirstLessonRouteForFundamentals(slug);

  if (redirectTo) {
    return <Navigate to={redirectTo} replace />;
  }

  return (
    <section className="pt-16">
      <EmptyState title="Fundamentals path not found" description="Return to the lesson catalog to choose an available fundamentals path." />
    </section>
  );
}
