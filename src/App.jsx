import { Box, TextField } from "@mui/material";
import { useTasks } from "./hooks/useTasks";
import Column from "./components/Column";
import { useUIStore } from "./store/useUIStore";

const API_URL = "http://localhost:4000/tasks";
const columns = ["backlog", "in_progress", "review", "done"];

function App() {
  const { data: tasks = [], deleteTask } = useTasks();
  const { search, setSearch } = useUIStore();

  const filteredTasks = tasks.filter(
    (t) =>
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Box sx={{ p: 4 }}>
      <TextField
        fullWidth
        placeholder="Search..."
        sx={{ mb: 4 }}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Box sx={{ display: "flex", gap: 3 }}>
        {columns.map((col) => (
          <Column
            key={col}
            title={col}
            tasks={filteredTasks.filter((t) => t.column === col)}
            onDelete={deleteTask}
          />
        ))}
      </Box>
    </Box>
  );
}

export default App;