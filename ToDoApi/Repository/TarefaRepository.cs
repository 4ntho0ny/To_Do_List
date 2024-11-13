using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ToDoApi.Data;
using ToDoApi.Dtos.Tarefa;
using ToDoApi.Interfaces;
using ToDoApi.Models;

namespace ToDoApi.Repository
{
    public class TarefaRepository : ITarefaRepository
    {
        private readonly ApplicationDBContext _context;
        public TarefaRepository(ApplicationDBContext context)
        {
            _context = context;
        }

        public async Task<Tarefa> CreateAsync(Tarefa tarefaModel)
        {
            await _context.Tarefa.AddAsync(tarefaModel);
            await _context.SaveChangesAsync();
            return tarefaModel;
        }

        public async Task<Tarefa?> DeleteAsync(long id)
        {
            var tarefaModel = await _context.Tarefa.FirstOrDefaultAsync(item => item.id == id);

            if (tarefaModel == null) 
            {
                return null;
            }

            _context.Remove(tarefaModel);
            await _context.SaveChangesAsync();
            return tarefaModel;
            
        }

        public Task<List<Tarefa>> GetAllAsync()
        {
            return _context.Tarefa.ToListAsync();
        }

        public async Task<Tarefa?> GetByIdAsync(long id)
        {
            return await _context.Tarefa.FindAsync(id);
        }

        public async Task<Tarefa?> UpdateAsync(long id, UpdateTarefaRequestDto tarefaDto)
        {
            var tarefaModel = await _context.Tarefa.FirstOrDefaultAsync(item => item.id == id);

            if (tarefaModel == null)
            {
                return null;
            }

            tarefaModel.titulo = tarefaDto.titulo;
            tarefaModel.descricao = tarefaDto.descricao;
            tarefaModel.status = tarefaDto.status;

            await _context.SaveChangesAsync();
            return tarefaModel;
        }
    }
}