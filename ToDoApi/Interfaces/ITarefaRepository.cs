using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToDoApi.Dtos.Tarefa;
using ToDoApi.Models;

namespace ToDoApi.Interfaces
{
    public interface ITarefaRepository
    {
        Task<List<Tarefa>> GetAllAsync();
        Task<Tarefa?> GetByIdAsync(long id);
        Task<Tarefa> CreateAsync(Tarefa tarefaModel);
        Task<Tarefa?> UpdateAsync(long id, UpdateTarefaRequestDto tarefaDto);
        Task<Tarefa?> DeleteAsync(long id); 
    }
}