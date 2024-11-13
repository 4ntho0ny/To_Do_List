using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ToDoApi.Data;
using ToDoApi.Dtos.Tarefa;
using ToDoApi.Interfaces;
using ToDoApi.Mappers;
using ToDoApi.Models;

namespace ToDoApi.Controllers
{
    [Route("api/tarefa")]
    public class TarefaController : ControllerBase
    {

        private readonly ApplicationDBContext _context;
        private readonly ITarefaRepository _tarefaRepo;

        public TarefaController(ApplicationDBContext context, ITarefaRepository tarefaRepo)
        {
            _tarefaRepo = tarefaRepo;
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var tarefas = await _tarefaRepo.GetAllAsync();

            var tarefaDto = tarefas.Select(t => t.ToTarefaDto());

            return Ok(tarefas);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetById([FromRoute] long id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var tarefa = await _tarefaRepo.GetByIdAsync(id);

            if (tarefa == null)
            {
                return NotFound();
            }

            return Ok(tarefa);
        }

        [HttpPost]
        public async Task<IActionResult> Create([FromBody] CreateTarefaRequestDto tarefaDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var tarefaModel = tarefaDto.ToTarefaFromCreateDTO();
            await _tarefaRepo.CreateAsync(tarefaModel);
            
            return CreatedAtAction(nameof(GetById), new {id = tarefaModel.id},tarefaModel.ToTarefaDto());
        }

        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> Update([FromRoute] long id, [FromBody] UpdateTarefaRequestDto updateDto)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            var tarefaModel = await _tarefaRepo.UpdateAsync(id, updateDto);

            if (tarefaModel == null) { return NotFound();}

            return Ok(tarefaModel.ToTarefaDto());
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> Delete([FromRoute] long id)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);
                
            var tarefaModel = await _tarefaRepo.DeleteAsync(id);

            if (tarefaModel == null)
            {
                return NotFound();
            }

            return NoContent();
        }
    }
}