using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToDoApi.Dtos.Tarefa;
using ToDoApi.Models;

namespace ToDoApi.Mappers
{
    public static class TarefaMappers
    {
        public static TarefaDto ToTarefaDto(this Tarefa tarefaModel)
        {
            return new TarefaDto
            {
                id  = tarefaModel.id,
                titulo = tarefaModel.titulo,
                descricao = tarefaModel.descricao,
                status = tarefaModel.status
            };
        }

        public static Tarefa ToTarefaFromCreateDTO(this CreateTarefaRequestDto tarefaDto)
        {
            return new Tarefa {
                titulo = tarefaDto.titulo,
                descricao = tarefaDto.descricao,
                status = tarefaDto.status
            };
        }
    }
}