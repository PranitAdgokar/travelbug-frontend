import TripForm from "../../components/TripForm";

const TripPlanPage: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Plan Your Trip</h1>
      <TripForm />
    </div>
  );
};

export default TripPlanPage;
