create or replace function vector_search(query_vector vector(1536), match_threshold float, match_count int, min_content_length int)
returns table (id bigint, input_text text, input_url text, usage_count bigint, similarity float)
language plpgsql
as $$
#variable_conflict use_variable
begin
  return query
  select
    embedding.id,
    embedding.input_text,
    embedding.input_url,
    embedding.usage_count,
    (embedding.vector <#> query_vector) * -1 as similarity
  from embedding

  -- We only care about sections that have a useful amount of content
  where length(embedding.input_text) >= min_content_length

  -- The dot product is negative because of a Postgres limitation, so we negate it
  and (embedding.vector <#> query_vector) * -1 > match_threshold

  -- OpenAI embeddings are normalized to length 1, so
  -- cosine similarity and dot product will produce the same results.
  -- Using dot product which can be computed slightly faster.
  --
  -- For the different syntaxes, see https://github.com/pgvector/pgvector
  order by embedding.vector <#> query_vector

  limit match_count;
end;
$$;

