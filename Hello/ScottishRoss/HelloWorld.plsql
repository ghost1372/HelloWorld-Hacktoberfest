declare

  v_string  varchar2(100);

begin

  select
    'Hello World!'
  into
    v_string
  from 
    dual;
    
  dbms_output.put_line(v_string);
  
  end;
