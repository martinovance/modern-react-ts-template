import { useQuery } from "@tanstack/react-query";
import { testApi } from "@/services/sampleService";

function App() {
  const { data } = useQuery({ queryKey: ["users"], queryFn: () => testApi() });
  return (
    <div>
      <div className="flex flex-col gap-3">
        {data?.map(({ name, id }: { name: string; id: number }) => (
          <p key={id}>{name}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
