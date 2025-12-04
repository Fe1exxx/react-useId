import { useState } from "react";
import { SearchBox } from "./SearchBox";

export default function HomePage() {
  const [query, setQuery] = useState("");

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl mb-4">Поиск</h1>
      <SearchBox
        value={query}
        onChange={setQuery}
        placeholder="Введите запрос..."
      />
      <p className="mt-4 text-gray-600">
        Вы ищете: <strong>{query || "—"}</strong>
      </p>
    </div>
  );
}
